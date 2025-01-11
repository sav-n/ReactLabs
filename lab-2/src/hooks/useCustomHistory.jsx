import { useNavigate } from 'react-router-dom';

const useCustomHistory = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };
    
    const goForward = () => {
        window.history.forward();
    };

    const goBack = () => {
        window.history.back();
    };

    return { navigateTo, goForward, goBack };
};

export default useCustomHistory;
