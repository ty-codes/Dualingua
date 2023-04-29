import { Header, Notification, Lessons, Leaderboard, PageWrapper } from "../components";

export default function Home() {
    return (
        <PageWrapper>
            <Header />
            <Notification />
            <Lessons />
            <Leaderboard />
        </PageWrapper>

    )
}