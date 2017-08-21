module Api::V1
    class AuthenticationController < ApiController
        #skip_before_action :authenticate_request 

        def authenticate
            #return render json: { test: 'works' }
            command = AuthenticateUser.call(params[:username], params[:password])
            if command.success?
                render json: { auth_token: command.result }
            else
                render json: { error: command.errors }, status: :unauthorized 
            end
        end
    end
end