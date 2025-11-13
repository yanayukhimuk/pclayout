const sendForm = () => {
    const form = document.querySelector('.modal')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                console.log('Ответ сервера:', json);
                alert('Форма успешно отправлена!');

                text.value = '';
                tel.value = '';
                email.value = '';
            })
            .catch((error) => {
                console.error('Ошибка при отправке формы:', error);
                alert('⚠️ Произошла ошибка при отправке. Попробуйте позже.');
            })
            .finally(() => {
                console.log('Завершена обработка формы');
            });
    })
}

const sendNewForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const result = await response.json();
            console.log('Ответ сервера:', result);

            alert('Форма успешно отправлена!');
            form.reset();
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert('⚠️ Произошла ошибка при отправке. Попробуйте позже.');
        } finally {
            console.log('Завершена обработка формы');
        }
    });
};

//sendForm()
sendNewForm()