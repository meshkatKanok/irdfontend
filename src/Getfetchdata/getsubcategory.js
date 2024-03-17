export async function getSubCategory() {
  try {
    const res = await fetch("http://localhost:5000/sub_categories");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const subcategories = await res.json();

    return {
      props: {
        subcategories,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching subcategories:", error.message);
    return {
      props: {
        subcategories: null, // or handle error state appropriately
      },
      revalidate: 60,
    };
  }
}
