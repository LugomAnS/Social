export const sendMessageAction = (id: string, value: string) => {
  return {
    type: "SEND-MESSAGE",
    payload: {
      id,
      message: value
    }
  } as const
}