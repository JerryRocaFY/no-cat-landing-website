// src/services/geminiService.ts

/**
 * Mocks a call to a Gemini-powered AI to get cleaning advice.
 * In a real application, this would involve an HTTP request to a backend
 * that communicates with the Gemini API.
 * 
 * @param query The user's question about cleaning.
 * @returns A promise that resolves to a string with cleaning advice.
 */
export const getCleaningAdvice = async (query: string): Promise<string> => {
  console.log("Fetching cleaning advice for:", query);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mocked responses based on query content
  if (query.toLowerCase().includes("velvet")) {
    return "For velvet, it's crucial to test No-Cat on a small, hidden area first. Apply a small amount to a clean white cloth and gently dab the stain. Do not rub. Blot with a dry cloth to absorb moisture. Let it air dry completely. Velvet is delicate, so professional cleaning is recommended for severe stains.";
  } else if (query.toLowerCase().includes("hardwood")) {
    return "Yes, No-Cat is safe for sealed hardwood floors. After spraying the affected area, wipe it clean with a damp cloth. Do not let the product pool or sit on the wood for an extended period to prevent any potential moisture damage.";
  } else if (query.toLowerCase().includes("mattress")) {
    return "To clean a mattress, spray No-Cat liberally on the stain until it is saturated. Cover the area with a damp, clean towel for 12-24 hours to allow the enzymes to work deep within the fibers. Afterward, remove the towel and let the mattress air dry completely. Use a fan to speed up drying.";
  } else if (query.toLowerCase().includes("kittens")) {
    return "No-Cat is 100% non-toxic and biodegradable, making it completely safe to use around kittens, puppies, and children. You can have peace of mind while cleaning up their messes.";
  }

  // Generic response
  return "Thank you for your question! To use No-Cat effectively, first remove any solid waste. Then, spray the area generously, ensuring the product penetrates deep into the material. For tough stains, you can cover the spot with a damp towel for a few hours. Finally, blot the area dry. No-Cat's enzymes will continue to work as it dries, completely eliminating the odor.";
};
