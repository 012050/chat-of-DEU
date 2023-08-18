import openai

openai.api_key = "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"

class Input:
    def __init__(self):
        self.content = ""
        self.messages = []
        self.chat_response = ""

    def input(self):
        self.content = input("User : ")
        self.messages.append({"role" : "user", "content" : self.content})

        completion = openai.Completion.create(
            model="gpt-3.5-turbo",
            messages = self.messages
        )

        self.chat_response = completion.choices[0].message.content
        print(f'ChatGPT : {self.chat_response}')
        self.messages.append({"role" : "assistant", "content": self.chat_response})

        return "ChatGPT : {}".format(self.chat_response)