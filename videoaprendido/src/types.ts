export interface QuestionItem {
  id: number;
  question: string;
  shortSummary?: string;
  answer: string;
  keyPoints?: string[];
}

export interface CoreConcept {
  id: string;
  name: string;
  category: string;
  shortDefinition: string;
  detailedExplanation: string;
  technicalDetails: string[];
}
