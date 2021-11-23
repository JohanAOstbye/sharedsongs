import { firebaseUser } from '../../interfaces/user';
import { auth, firestore } from '../firebase/admin';

export function withAdmin(handler) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).end('Not authenticated. No Auth header');
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
      decodedToken = await auth.verifyIdToken(token);
      if (!decodedToken || !decodedToken.uid)
        return res.status(401).end('Not authenticated');
      const uid = decodedToken.uid;
      const user: firebaseUser = await firestore
        .collection('users')
        .doc(uid)
        .get();

      if (!user.isAdmin) {
        throw { errorinfo: { code: 'User is not a admin' } };
      }
      req.uid = uid;
    } catch (error) {
      console.log(error.errorInfo);
      const errorCode = error.errorInfo.code;
      error.status = 401;
      if (errorCode === 'auth/internal-error') {
        error.status = 500;
      }
      if (errorCode === 'User is not a admin') {
        error.status = 403;
      }
      //TODO: handlle firebase admin errors in more detail
      return res.status(error.status).json({ error: errorCode });
    }

    return handler(req, res);
  };
}
