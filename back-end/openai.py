import openai

openai.api_key = "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"

class Input:
    def __init__(self):
        self.content = ""
        self.messages = []
        self.completion = openai.ChatCompletion.create()
        self.chat_response = ""

    def input(self):
        self.content = input("User : ")
        self.messages.append({"role" : "user", "content" : self.content})

        self.completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages = self.messages
        )

        self.chat_response = self.completion.choices[0].message.content
        print()
        

