import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN
});

async function fetchAPI(query, { variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`
      }
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getMenu() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allMenus(lang: $lang) {
        edges {
          node {
            _meta {
              id
              type
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            meta_title
            meta_description
            title
            links {
              thumbnail
              name
              slug
            }
          }
        }
      }
    }`,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allMenus.edges[0];
}

export async function getHomePage() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allHome_pages(lang: $lang) {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            meta_title
            meta_description
            name
            profession
            headquarters
            projects_section_title
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allHome_pages.edges[0];
}

export async function getAllProjects() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allProjects(sortBy: priority_ASC, lang: $lang) {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            priority
            title
            category {
              ... on Category {
                name
              }
            }
            type {
              ... on Type {
                name
              }
            }
            year
            cover_photo
          }
        }
      }
    }
  `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allProjects.edges;
}

export async function getCommercialProjects() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allProjects(where: {type: "X3YaThAAACkUwDKH"}, sortBy: year_DESC, lang: $lang) {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            title
            category {
              ... on Category {
                name
              }
            }
            type {
              ... on Type {
                name
              }
            }
            year
            cover_photo
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allProjects.edges;
}

export async function getPersonalProjects() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allProjects(where: {type: "X3YaYRAAACkUwDLd"}, sortBy: year_DESC, lang: $lang) {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            title
            category {
              ... on Category {
                name
              }
            }
            type {
              ... on Type {
                name
              }
            }
            year
            cover_photo
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allProjects.edges;
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(
    `
    {
      allProjects {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
          }
        }
      }
    }
    `
  );
  return data?.allProjects?.edges;
}

export async function getProject(slug) {
  const data = await fetchAPI(
    `
    query ($slug: String!, $lang: String!) {
      project(uid: $slug, lang: $lang) {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
        title
        category {
          ... on Category {
            name
          }
        }
        type {
          ... on Type {
            name
          }
        }
        year
        role
        description
        cover_photo
        body {
          ... on ProjectBodyAgency {
            type
            primary {
              name
            }
          }
          ... on ProjectBodyClient {
            type
            primary {
              name
            }
          }
          ... on ProjectBodyTeam {
            type
            fields {
              member_name
              member_role
            }
          }
          ... on ProjectBodyGallery {
            type
            fields {
              photo
            }
          }
          ... on ProjectBodyVideo {
            type
            primary {
              video_url
            }
          }
        }
      }
    }
`,
    {
      variables: {
        slug,
        lang: API_LOCALE
      }
    }
  );
  return data;
}

export async function getAllTables() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allTables(lang: $lang) {
        edges {
          node {
            _meta {
              id
              uid
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            title
            row {
              year
              location
              content
              institution
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data;
}

export async function getAllClients() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
      allClients(lang: $lang) {
        edges {
          node {
            _meta {
              uid
            }
            logo
          }
        }
      }
    }
  `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data;
}

export async function getAboutPageData() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allAbout_pages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
            }
            meta_title
            meta_description
            page_title
            artist_photo
            bio
            body {
              ... on About_pageBodyTable {
                type
                primary {
                  table_title
                }
                fields {
                  institution
                  year_location
                  content
                }
              }
              ... on About_pageBodyClients {
                type
                primary {
                  clients_section_title
                }
                fields {
                  logos
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allAbout_pages.edges[0].node;
}

export async function getProjectsPage() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
      allProjects_pages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
            }
            meta_title
            meta_description
            page_title
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allProjects_pages.edges[0];
}

export async function getReelPage() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
      allReel_pages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
            }
            meta_title
            meta_description
            page_title
            body {
              ... on Reel_pageBodyVideo {
                type
                primary {
                  video_url
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allReel_pages.edges[0].node;
}

export async function getContactPage() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
      allContact_pages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              type
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            meta_title
            meta_description
            page_title
            cta
            body {
              ... on Contact_pageBodySocial {
                type
                primary {
                  name
                  link {
                    __typename
                    ... on _ExternalLink {
                      url
                    }
                    ... on _FileLink {
                      name
                      url
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allContact_pages.edges[0].node;
}

export async function getAllExpos() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
      allExpos(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              id
            }
            location
            cover_photo
            card_color
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data.allExpos.edges;
}

export async function getAllExposWithSlug() {
  const data = await fetchAPI(
    `
    query($lang: String!) {
    allExpos(lang: $lang) {
      edges {
        node {
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );

  return data.allExpos.edges;
}

export async function getExpoPage() {
  const data = await fetchAPI(
    `
    query ($lang: String!) {
      allExpos_pages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              type
              lang
              alternateLanguages {
                id
                type
                lang
              }
            }
            meta_title
            meta_description
            page_title
          }
        }
      }
    }
    `,
    {
      variables: {
        lang: API_LOCALE
      }
    }
  );
  return data?.allExpos_pages?.edges[0];
}

export async function getExpo(slug) {
  const data = await fetchAPI(
    `
    query ($slug: String!, $lang: String!) {
      expo(uid: $slug, lang: $lang) {
        _meta {
          uid
        }
        title
        year
        location
        description
        cover_photo
        body {
          ... on ExpoBodyGallery {
            type
            fields {
              photo
            }
          }
          ... on ExpoBodyVideo {
            type
            primary {
              video_url
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        slug,
        lang: API_LOCALE
      }
    }
  );
  return data;
}
