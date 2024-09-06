import User from '@/models/userModel';

export async function CreateUser(user) {
    try {
        await User.create(user);
    } catch (error) {
        throw new Error(error);
    }
}
