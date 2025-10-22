const timeContainer = document.querySelector('.clock');
const root = ReactDOM.createRoot(timeContainer);

    function clock() {
        const currenTime = dayjs().format('HH:mm:ss');
        root.render(<p>{currenTime}</p>);
    }

    let isClockOn = true;
    let intervalId;

    clock();
    intervalId = setInterval(clock, 1000);

    const controlBttn = document.querySelector('.js-button');

    controlBttn.addEventListener('click', () => {
        if (isClockOn) {
            clearInterval(intervalId);
            controlBttn.innerText = 'Play';
        } else {
            intervalId = setInterval(clock, 1000);
            controlBttn.innerText = 'Stop';
        }
            isClockOn = !isClockOn;
    });
