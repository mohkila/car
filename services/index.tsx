import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          url
          }
          carType
      }
    }
  `
  const result = await request('https://eu-west-2.cdn.hygraph.com/content/cm5e1qcfg027d07w66y55pay5/master',query)
  return result
};
