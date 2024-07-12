"use server"


export const sendMessage = async (formData) => {
    const { name, email, phoneNumber, message } = Object.fromEntries(formData);
    console.log({ name, email, phoneNumber, message })
}


export const addPost = async (formData) => {
    const { title, bio, image } = Object.fromEntries(formData);
    console.log({ title, bio, image: image })
};

export const addUser = async (formData) => {
    const { title, bio, image } = Object.fromEntries(formData);
    console.log({ title, bio, image: image })
};

export const addAdminUser = async (formData) => {
    const { username,email,password, img,accountType } = Object.fromEntries(formData);
    console.log({username,email,password, img,accountType })
};