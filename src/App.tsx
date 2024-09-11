
import {Suspense,lazy} from 'react';
import LoadingPage from './customComponents/customComponents/LoadingPage/App';
const UsatVideo=lazy(()=>import('./customComponents/customComponents/VideoPlayer/App'));
const Hero = lazy(() => import('./customComponents/customComponents/Hero/App'));
const About = lazy(() => import('./customComponents/customComponents/About/App'));
const Info = lazy(() => import('./customComponents/customComponents/Info/App'));
const Bachelor=lazy(() => import('./customComponents/customComponents/Bachelor/App'));
const MagistrInfo =lazy(() => import('./customComponents/customComponents/MagistrInfo/App'));
const Magistr = lazy(() => import('./customComponents/customComponents/Magistr/App'));
const Questions = lazy(() => import('./customComponents/customComponents/Questions/App'));
function App() {
    return (
        <>  
            <Suspense fallback={<LoadingPage></LoadingPage>}>
                 <Hero></Hero>
                <About></About>
                <Info></Info>
                <UsatVideo videoId="e6icoGpavgM"></UsatVideo>
                <Bachelor></Bachelor>
                <MagistrInfo></MagistrInfo>
                <Magistr></Magistr>
                <Questions></Questions>
            </Suspense>
        </>
    )
}

export default App
