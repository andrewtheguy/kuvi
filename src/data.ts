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
    {
        name: 'NostrPad',
        subdomain: 'nostrpad',
        description: 'Shared notepad powered by Nostr relays.',
        github: 'https://github.com/andrewtheguy/nostrpad',
        category: 'tools',
        platform: 'web',
    },
    {
        name: 'Audio Player',
        subdomain: 'audioplayer',
        description: 'Web-based HLS audio player with position memory.',
        github: 'https://github.com/andrewtheguy/audioplayer',
        category: 'audio',
        platform: 'web',
    },
    {
        name: 'Transmitwave',
        subdomain: 'transmitwave',
        description: 'Data-over-sound transmission using FSK modulation.',
        github: 'https://github.com/andrewtheguy/transmitwave',
        category: 'transfer',
        platform: 'web',
    },

    // Standalone Utilities
    {
        name: 'Wormhole RS',
        description: 'Secure file transfer tool inspired by Magic Wormhole.',
        github: 'https://github.com/andrewtheguy/wormhole-rs',
        category: 'transfer',
        platform: 'standalone',
    },
    {
        name: 'Tunnel RS',
        description: 'High-performance tunneling tool for exposing local servers.',
        github: 'https://github.com/andrewtheguy/tunnel-rs',
        category: 'transfer',
        platform: 'standalone',
    },
    {
        name: 'Tunnel RS Manager',
        description: 'GUI Manager for tunnel-rs instances.',
        github: 'https://github.com/andrewtheguy/tunnel-rs-manager',
        category: 'transfer',
        platform: 'standalone',
    },
    {
        name: 'Whisper Transcribe Py',
        description: 'Transcribe files, microphone input, or audio streams using Whisper with VAD.',
        github: 'https://github.com/andrewtheguy/whisper_transcribe_py',
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
        description: 'Record and save live audio streams.',
        github: 'https://github.com/andrewtheguy/save_audio_stream',
        category: 'audio',
        platform: 'standalone',
    },
    {
        name: 'Playsound RS',
        description: 'CLI tool for playing white noise and audio files.',
        github: 'https://github.com/andrewtheguy/playsoundrs',
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
