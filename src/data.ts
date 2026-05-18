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
        name: 'Audio Pattern Detector',
        description: 'Real-time detection of specific audio patterns.',
        github: 'https://github.com/andrewtheguy/audio_pattern_detector',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'Save Audio Stream',
        description: 'Record and save live audio streams.',
        github: 'https://github.com/andrewtheguy/save_audio_stream',
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
        name: 'Dup File Finder RS',
        description: 'Fast duplicate file finder utility.',
        github: 'https://github.com/andrewtheguy/dup-file-finder-rs',
        category: 'tools',
        platform: 'standalone',
    },
];
