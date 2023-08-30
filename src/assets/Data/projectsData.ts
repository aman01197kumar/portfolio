// import ecommerce from '../img/ecommerce.jpeg'
import taskmanager from '../../img/taskmanager.jpeg'
import contact from '../../img/contact.jpeg'
import Ecommerce from '../../img/ecommerce.jpeg'

export const projectsData = [
    {
        id: 0,
        title: "E-commerce website",
        desc: "A clone of Amazon built using React facilitates the addition of desired items to the cart through effective routing methods, enhancing the user experience by providing smoother website navigation.",
        img: Ecommerce,
        tags: ["React", "SCSS", "Redux Toolkit"],
    },
    {
        id: 1,
        title: "Task Manager",
        desc: "The provided code exemplifies the practical implementation of Server Side Rendering, Next.js,and TypeScript to develop a comprehensive task management feature encompassing essentialoperations such as task addition, editing, and deletion.",
        img: taskmanager,
        tags: ["Nextjs", "Tailwind CSS", "Local Storage"],
    },
    {
        id: 2,
        title: "Contact List",
        desc: "Presenting a set of pre-existing data that can be modified and removed, along with the added capability to include additional contacts.",
        img: contact,
        tags: ["React", "Material UI"],
    },
]