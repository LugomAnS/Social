export const addPostAction = (id: string, value: string) => {
  return {
    type: "ADD-POST",
    payload: {
      id,
      message: value,
    }
  } as const;
}