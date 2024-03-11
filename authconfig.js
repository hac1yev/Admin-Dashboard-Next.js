export const authConfig = {
    pages: {
        signIn: "/login"
    },
    callbacks: {
        authorized({auth,request}) {
            const isLoggedIn = auth?.user;
            const isOnDashboard = request.newUrl.pathname.startWith("/dashboard");

            if(isOnDashboard){
                if(isLoggedIn) {
                    return true;
                }else{
                    return false;
                }
            }else if(isLoggedIn) {
                return Response.redirect(new URL("/dashboard", request.nextUrl));
            }
            return true;
        }
    }
};