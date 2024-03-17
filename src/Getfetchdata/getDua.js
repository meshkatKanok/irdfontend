export async function getDua() {
  try {
    const res = await fetch("http://localhost:5000/duas");
    if (!res.ok) {
      throw new Error("Failed to fetch duas");
    }
    const dua = await res.json();

    return {
      props: {
        dua,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching duas:", error.message);
    return {
      props: {
        dua: null, // or handle error state appropriately
      },
      revalidate: 60,
    };
  }
}
