/** @format */

const elf = document.getElementById('elf')
const elfHangoutZone = document.querySelector('.elf-hangout-zone')
const btn = document.getElementById('btn')

btn.addEventListener('click', duplicateElf)

function duplicateElf() {
    if (elfHangoutZone.children.length < 100) {
        // Limit the total number of elves to 100
        const newElf = elf.cloneNode(true)
        elfHangoutZone.appendChild(newElf)
    }

    if (elfHangoutZone.children.length === 100) {
        celebrate()
    }
}

function celebrate() {
    const header = document.querySelector('h1')
    header.innerText = 'The elf is not lonely anymore! 🎉'
    header.classList.add('celebrate')
}
