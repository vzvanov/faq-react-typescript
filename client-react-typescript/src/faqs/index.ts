
export type Faq = {
  readonly _id: string,
  readonly summary: string,
  readonly info: string,
  __v?: number,
}

export const faqs: Array<Faq> = [
  {
    "_id": "6342fb32a75c4cd99af6f94b",
    "summary": "Do you provide additional support?",
    "info": "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    "__v": 0
  },
  {
    "_id": "6342fb9ca75c4cd99af6f950",
    "summary": "Can I cancel my subscription?",
    "info": "Yes! Send us a message and we’ll process your request no questions asked.",
    "__v": 0
  },
  {
    "_id": "6342fbcca75c4cd99af6f953",
    "summary": "How do I reset my password?",
    "info": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",
    "__v": 0
  },
  {
    "_id": "6342fbe0a75c4cd99af6f956",
    "summary": "What is the maximum file upload size?",
    "info": "No more than 2GB. All files in your account must fit your allotted storage space.",
    "__v": 0
  },
  {
    "_id": "6342fc04a75c4cd99af6f959",
    "summary": "How many team members can I invite?",
    "info": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    "__v": 0
  }
];
