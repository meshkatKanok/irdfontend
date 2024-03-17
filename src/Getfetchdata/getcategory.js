export async function getCategory() {
  try {
    const res = await fetch("http://localhost:5000/categories");
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await res.json(); // Parse response body as JSON

    return {
      props: {
        categories,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return {
      props: {
        categories: null, // or handle error state appropriately
      },
      revalidate: 60,
    };
  }
}
