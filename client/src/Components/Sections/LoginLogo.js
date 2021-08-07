import './LoginLogo.css'
export const LoginLogo = ({boldText, smallText}) => (
    <div className="login-logo">
        <a><b>{boldText}</b>{smallText}</a>
    </div>
)