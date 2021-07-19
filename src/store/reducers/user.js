import { LOG_IN } from '../constants';

const initialState = {
  user:null
  // {"isAnonymous":false,"emailVerified":true,"providerData":[{"email":"strappadenis@gmail.com","providerId":"google.com","uid":"117815620776886888441","photoURL":"https://lh3.googleusercontent.com/a-/AOh14GgmN747LMgjklue9OPt6C_ONkFbpB6oRuH3lyi9og=s96-c","displayName":"Denis Strappa"}],"uid":"Qbkcd3wy8CWN6gmFoMZG4TmPmnH3","email":"strappadenis@gmail.com","refreshToken":"AGEhc0AhZmwYuIeRIlr-nRrr-4hRsJ1YNVhxOTrMSW4yYgHR2ZVYQgUxtGgeKELrsPOVkooiYEV1WBEIK_N91ManAmo7hp0GjByJUw7opQf53YppAGvrrQDLoI-kCKldbavAfRh4awiPd6e4j8JGixruobo9F4fuZFyPHmiP0bl6l0c6cak-I6ftURm4PP9njm9ZVRFF76RujbOLl43tGxIEbkoGj2dlGTXYw3X6IvDBCd_K2Zk7nvSOKudFtX7rf7OM7fP0C6q5cbCuo2xN-Uh-kjbJ0p23Fe2FJdkyMyY_n1CsB0eexB--zr8AqsGcE-bdNfb0aR3Q1NyvGA3tv4N7EQzR61v7dp5hT9jhfdooWJ-GRpkJHv9VoPGJKdiToCP3JUYPQ2btWTJyY_1TwMUJtv1amCKG1CivAlMXzBs44ZvUFCB6-Xs","displayName":"Denis Strappa","tenantId":null,"phoneNumber":null,"photoURL":"https://lh3.googleusercontent.com/a-/AOh14GgmN747LMgjklue9OPt6C_ONkFbpB6oRuH3lyi9og=s96-c","metadata":{"creationTime":1625618398999,"lastSignInTime":1625788365447},"providerId":"firebase"}
};

export default (state = initialState, action) => {
  if (action.type === LOG_IN) {
    return { 
      ...state,
      user: action.data
    };
  }
  return { ...state };
};


