const initCourseAnimation = () => {
    const courseProgress = document.querySelector('.course__progress');
    if (!courseProgress) return;

    const courseNumber = courseProgress.querySelector('.course__number');
    const progressEl = courseProgress.querySelector('progress');

    let hasAnimated = false;

    const animateCourse = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        const startValue = 0;
        const targetValue = Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;
        const maxValue = 1000000;
        const duration = 2000;
        const stepTime = 20;

        let currentValue = startValue;
        const steps = duration / stepTime;
        const increment = (targetValue - startValue) / steps;

        courseNumber.textContent = '0₽';
        progressEl.value = 0;

        const counter = setInterval(() => {
            currentValue += increment;

            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(counter);
            }

            courseNumber.textContent = Math.floor(currentValue).toLocaleString('ru-RU') + '₽';
            progressEl.value = currentValue;
        }, stepTime);
    };

    const checkVisibility = () => {
        const rect = courseProgress.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const topThird = viewportHeight / 3;
        const bottomThird = 2 * viewportHeight / 3;
        const elementCenter = rect.top + rect.height / 2;

        if (elementCenter > topThird && elementCenter < bottomThird) {
            animateCourse();
        }
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
};

document.addEventListener('DOMContentLoaded', initCourseAnimation);
