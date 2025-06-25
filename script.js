const PR_SECT = document.getElementById("project_info")
const EDU_SECT = document.getElementById("education_info")
const SKILL_SECT = document.getElementById("skill_info")

const PR_HEAD = document.getElementById("projects")
const EDU_HEAD = document.getElementById("education")
const SKILL_HEAD = document.getElementById("skill")

const sectTab =[PR_SECT, EDU_SECT, SKILL_SECT];

displaySection(PR_SECT);

PR_HEAD.addEventListener("click", () => {
    displaySection(PR_SECT);
});

EDU_HEAD.addEventListener("click", () => {
    displaySection(EDU_SECT);
});

SKILL_HEAD.addEventListener("click", () => {
    displaySection(SKILL_SECT);
});

function displaySection(active_section)
{
    sectTab.forEach(section => {
        if(section === active_section){
            section.style.display = "block";
        }
        else
        section.style.display = "none";
    })
}