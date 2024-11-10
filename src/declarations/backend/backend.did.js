export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBio' : IDL.Func([], [IDL.Text], ['query']),
    'getVisits' : IDL.Func([], [IDL.Nat], ['query']),
    'incrementVisits' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
