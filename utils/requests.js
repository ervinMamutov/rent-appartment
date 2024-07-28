const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
const fetchProperties = async () => {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error('Failed fetch new data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fetch single property
const fetchProperty = async (id) => {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const url = `${apiDomain}/properties/${id}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed fetch new data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
