export const showBurgerDiv = ref(false);

export function showBurger() {
    showBurgerDiv.value = !showBurgerDiv.value;
}