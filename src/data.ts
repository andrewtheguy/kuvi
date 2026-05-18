export type CategoryId = 'transfer' | 'audio' | 'tools';
export type PlatformId = 'web' | 'standalone';

export interface Project {
    name: string;
    description: string;
    github: string;
    subdomain?: string;
    category: CategoryId;
    platform: PlatformId;
}

export interface Category {
    id: CategoryId;
    title: string;
    description: string;
}

export interface Platform {
    id: PlatformId;
    title: string;
    description: string;
    image: string;
}

export const platforms: Platform[] = [
    {
        id: 'web',
        title: 'Web Applications',
        description: 'Instant-access tools running in your browser.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 'standalone',
        title: 'Standalone Utilities',
        description: 'Powerful CLI and desktop applications for advanced tasks.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    },
];

export const categories: Category[] = [
    {
        id: 'transfer',
        title: 'Secure Transfer & Networking',
        description: 'Tools for secure, private data transfer and tunneling.',
    },
    {
        id: 'audio',
        title: 'Audio & Media',
        description: 'Speech recognition, streaming, and audio processing tools.',
    },
    {
        id: 'tools',
        title: 'System & Productivity',
        description: 'Utilities to organize your files and boost productivity.',
    },
];

export const projects: Project[] = [
    // Web Apps
    {
        name: 'QR Secure Share',
        subdomain: 'qrsecure',
        description: 'Offline file transfer and text generation via QR codes.',
        github: 'https://github.com/andrewtheguy/qrcodesecureshare',
        category: 'transfer',
        platform: 'web',
    },
    {
        name: 'Secure Send',
        subdomain: 'securesend',
        description: 'Encrypted P2P text and file transfer with PIN security.',
        github: 'https://github.com/andrewtheguy/secure-send-web',
        category: 'transfer',
        platform: 'web',
    },
    // Standalone Utilities
    {
        name: 'Wormhole RS',
        description: 'A secure, cross-platform, single-binary peer-to-peer file transfer tool with direct connectivity and AES-256-GCM end-to-end encryption.',
        github: 'https://github.com/andrewtheguy/wormhole-rs',
        category: 'transfer',
        platform: 'standalone',
    },
    {
        name: 'Tunnel RS',
        description: 'Convenient tunneling tool for exposing local servers securely.',
        github: 'https://github.com/andrewtheguy/tunnel-rs',
        category: 'transfer',
        platform: 'standalone',
    },
    {
        name: 'VAD Transcribe Py',
        description: 'CLI audio transcription tool combining Silero VAD with pluggable ASR backends (Whisper, Moonshine, Qwen3-ASR, GLM-ASR).',
        github: 'https://github.com/andrewtheguy/vad_transcribe_py',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'Audio Pattern Detector',
        description: 'Real-time detection of specific audio patterns.',
        github: 'https://github.com/andrewtheguy/audio_pattern_detector',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'Save Audio Stream',
        description: 'Live audio stream relay that records Shoutcast/Icecast broadcasts and syncs them to remote servers for HLS web playback.',
        github: 'https://github.com/andrewtheguy/save_audio_stream',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'S3 Player',
        description: 'Password-gated player for S3-hosted radio recordings, with resume playback and single-session takeover.',
        github: 'https://github.com/andrewtheguy/s3player',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'S3 Player App',
        description: 'SwiftUI iOS/macOS client for the S3 Player backend, with lock-screen Now Playing and background audio.',
        github: 'https://github.com/andrewtheguy/s3player-app',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'File Organizer',
        description: 'CLI tool to organize files based on rules.',
        github: 'https://github.com/andrewtheguy/file-organizer',
        category: 'tools',
        platform: 'standalone',
    },
    {
        name: 'S3 Browser',
        description: 'Web-based file manager for AWS S3 and S3-compatible storage with upload, download, and preview support.',
        github: 'https://github.com/andrewtheguy/s3browser',
        category: 'tools',
        platform: 'standalone',
    },
    {
        name: 'Dup File Finder RS',
        description: 'Fast duplicate file finder utility.',
        github: 'https://github.com/andrewtheguy/dup-file-finder-rs',
        category: 'tools',
        platform: 'standalone',
    },
    {
        name: 'Systemdmgr',
        description: 'Terminal UI for browsing and managing systemd units, with live log tailing and unit actions.',
        github: 'https://github.com/andrewtheguy/systemdmgr',
        category: 'tools',
        platform: 'standalone',
    },
    {
        name: 'Markdown Viewer',
        description: 'Self-hosted web viewer for markdown and text files stored in S3, with SQLite FTS5 full-text search.',
        github: 'https://github.com/andrewtheguy/mdviewer',
        category: 'tools',
        platform: 'standalone',
    },
    {
        name: 'MyWebTerm',
        description: 'Web-based terminal that runs your shell in the browser via Bun PTY, with session persistence and mobile support.',
        github: 'https://github.com/andrewtheguy/mywebterm',
        category: 'tools',
        platform: 'standalone',
    },
];
