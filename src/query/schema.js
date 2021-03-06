
const graphql = require('graphql');

const moistureFactory = require('./moisture');

module.exports = (moistureService) => {
  const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Root',
      description: 'Root of the Schema',
      fields: {
        moisture: moistureFactory(moistureService),
      },
    }),
  });

  return schema;
};
