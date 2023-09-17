1. Реалізація теми, концепт:

Для ручного переключения темы необходимо добавить на сайт чекбокс, при активации
которого будет включаться темная дема, а при деактивации - светлая. При нажатии
на этот чекбокс будет срабатывать javascript-функция changeTheme. В случае если
чекбокс активирован, то функция будет добавлять к body новый аттрибут dark. В
противном случае этот аттрибут будет удаляться.

function changeTheme(isChecked) { if (isChecked) {
document.body.setAttribute('dark', ''); } else {
document.body.removeAttribute('dark'); } }

Теперь немного изменим css, и сделаем смену значений переменных при наличии
аттрибута dark:

:root { --var-bgcolor: #fff; --var-fontcolor: #000; }

[dark] { --var-bgcolor: #333; --var-fontcolor: #eee; }

body { background-color: var(--var-bgcolor); color: var(--var-fontcolor); }
