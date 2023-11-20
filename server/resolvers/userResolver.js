import UserModel from "../models/User.js";
import ProductModel from "../models/Products.js";

const userResolver = {
    Query: {
        getFavoritesByUserID: async (_, { userID }) => {
            try {
                const user = await UserModel.findOne({ userID: userID }).populate('favorites');
            
                if (!user) {
                  throw new Error('User not found');
                }
            
                return user.favorites; // Returnerer alle favoritter for brukeren
            } catch (error) {
                throw new Error(`Failed to get user favorites: ${error.message}`);
            }
        },
    },
    Mutation: {
        addUser: async (_, { userID }) => {
            const user = new UserModel({ userID, favorites: [], ratings: [] });
            return await user.save();
        },   

        addFavorite: async (_, { userID, productID }) => {
            try {
                const user = await UserModel.findOne({ userID: userID });
                if (!user) {
                    throw new Error("User not found");
                }
                const product = await ProductModel.findOne({ productID: productID });
                if (!product) {
                    throw new Error("Product not found");
                }
                user.favorites.push(product);
                await user.save();
                return user;
            } catch (error) {
                throw new Error(`Failed to add favorite: ${error.message}`);
            }
        },

        removeFavorite: async (_, { userID, productID }) => {
            try {
                const user  = await UserModel.findOne({ userID: userID });
                if (!user) {
                    throw new Error("User not found");
                }
                const product = await ProductModel.findOne({ productID: productID });
                if (!product) {
                    throw new Error("Product not found");
                }
                const index = user.favorites.indexOf(product._id);
                if (index === -1) {
                    throw new Error("Product is not in favorites");
                }
                user.favorites.splice(index, 1);
                await user.save();
                return user;
            } catch (error) {
                throw new Error(`Failed to remove favorite: ${error.message}`);
            }
        }
    }
}

export default userResolver;