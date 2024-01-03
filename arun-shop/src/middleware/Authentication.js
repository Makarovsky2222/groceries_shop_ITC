import { checkingUserSign, getUserID } from "../services/Authentication"

export const ensureSignIn = (res, next) => {
    checkingUserSign()

    if (!getUserID) {
        return res.json({
            success: false,
            message: "Please sign in first."
        })
    }

    next()
}


export const ensureSignOut = (res, next) => {
    checkingUserSign()

    if (getUserID) {
        return res.json({
            success: false,
            message: "You are already sign out."
        })
    }

    next()
}