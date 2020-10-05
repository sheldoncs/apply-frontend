export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Int: number;
};

export type CreateUserLogin = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createLogin?: Maybe<Login>;
  deleteLogin?: Maybe<Login>;
};

export type MutationCreateLoginArgs = {
  data?: Maybe<CreateUserLogin>;
};

// export type MutationUpdateUserArgs = {
//   id?: Maybe<Scalars["ID"]>;
//   data?: Maybe<UpdateUserInput>;
// };

export type MutationDeleteLoginArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  login?: Maybe<Login>;
  logins: Array<Login>;
  findByEmail: Maybe<Login>;
  authorizeUser: Maybe<Login>;
};

export type QueryLoginArgs = {
  id: Scalars["ID"];
};

// export type UpdateUserInput = {
//   username?: Maybe<Scalars["String"]>;
//   email?: Maybe<Scalars["String"]>;
//   name?: Maybe<Scalars["String"]>;
// };

export type Login = {
  __typename?: "Login";
  id: Scalars["ID"];
  username: Scalars["String"];
  password: Scalars["String"];
};
