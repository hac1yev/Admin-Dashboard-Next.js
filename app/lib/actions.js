"use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { hash } from "bcrypt";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    const newPassword = await hash(password, 12);

    try {
        connectToDB();
        const newUser = new User({
            username, email, password: newPassword, phone, address, isAdmin, isActive
        });

        await newUser.save();
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newProduct = new Product({
            title, desc, price, stock, color, size
        });

        await newProduct.save();
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const updateFields = { username, email, password, phone, address, isAdmin, isActive };

        Object.keys(updateFields).forEach(key => updateFields[key] === "" || undefined && delete updateFields[key]);

        await User.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {
        connectToDB();
        const updateFields = { title, desc, price, stock, color, size };

        Object.keys(updateFields).forEach(key => updateFields[key] === "" || undefined && delete updateFields[key]);

        await Product.findByIdAndUpdate(id, updateFields)

    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};