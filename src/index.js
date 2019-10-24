const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  type Query {
    colorBad: AllowedColor
    colorGood: AllowedColor
  }

  enum AllowedColor {
    RED
    GREEN
    BLUE
  }
`;

const resolvers = {
  Query: {
    colorBad: () => 0,
    colorGood: () => 1
  },
  AllowedColor: {
    RED: 0,
    GREEN: 1,
    BLUE: 2
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema({
    typeDefs,
    resolvers
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
