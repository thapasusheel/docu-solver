from openai import OpenAI

client = OpenAI(base_url='https://api.naga.ac/v1',
                api_key='ng-vyAGSo48GgfcQ0oirxdpZae5HOXMY')


def get_nagaai_response(question, llm_response):

    message = """

        Question: {question}

        LLM Response One: {llm_response[0]}
        LLM Response Two: {llm_response[1]}
        LLM Response Three: {llm_response[2]}
        LLM Response Four: {llm_response[3]}
        LLM Response Five: {llm_response[4]}
        Todo: Based on the answer provided by LLM, repharse the answer to address the question


"""
    response = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=[{
            'role': 'user',
            'content': mess
        }]
    )

    print(response.choices[0].message.content)

    return response.choices[0].message.content
