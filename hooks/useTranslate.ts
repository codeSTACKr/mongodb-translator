import { useState } from "react";

interface RequestBody {
  inputText: string;
  documentSchema?: string;
}

export function useTranslate() {
  const [translating, setTranslating] = useState(false);
  const [outputText, setOutputText] = useState("");
  const [translationError, setTranslationError] = useState("");

  const translate = async ({
    inputText,
    documentSchema,
    isHumanToMql,
  }: {
    inputText: string;
    documentSchema: string;
    isHumanToMql: boolean;
  }) => {
    setTranslating(true);
    try {
      const requestBody: RequestBody = { inputText };
      if (documentSchema !== "") {
        requestBody.documentSchema = documentSchema;
      }
      const response = await fetch(
        `/api/${isHumanToMql ? "translate" : "mql-to-human"}`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setOutputText(data.outputText);
      } else {
        setTranslationError(
          `Error translating ${
            isHumanToMql ? "to MongoDB Query API" : "to human"
          }.`
        );
      }
    } catch (error) {
      console.error(error);
      setTranslationError(
        `Error translating ${
          isHumanToMql ? "to MongoDB Query API" : "to human"
        }.`
      );
    } finally {
      setTranslating(false);
    }
  };

  return {
    outputText,
    setOutputText,
    translate,
    translating,
    translationError,
  };
}
