import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId:"n7s2x5ww",
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,
    token: "sk0QJ9dkqYOmNr9Ouq2oyBXawqcwBWVq4jZD8R5VNKMn12bmHZkbJEot0z01E9bdRzveoT5oEoZGmx8N0gB4P0gu7nxEtiLe22Flkud2Bh8LRbn3gELTudKzXE5uwVgGN0oVTKIJ17DkqrUFWJnj5L7kWBqSviA0sGPDhgHuVdQZR7bo1POt"
}
    
)