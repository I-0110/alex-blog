export type Video = {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt?: string;
    viewCount?: string;
};

export type VideoSearchItem = {
    id: { videoId: string };
    snippet: {
        title: string;
        thumbnails: { high: { url: string } };
        publishedAt: string;   
    };
};

export type VideoItem = {
    id: string;
    snippet: {
        title: string;
        thumbnails: { high: { url: string } };
    };
    statistics: {
        viewCount: string;
    };
};

export type VideoGridProps = {
    videos: Video[];
}

