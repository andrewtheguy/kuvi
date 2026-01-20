export type CategoryId = 'transfer' | 'audio' | 'tools';

export interface Project {
    name: string;
    description: string;
    github: string;
    subdomain?: string; // If present, it's a web app
    category: CategoryId;
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
    // Transfer
    {
        name: 'QR Secure Share',
        subdomain: 'qrsecure',
        description: 'Offline file transfer and text generation via QR codes.',
        github: 'https://github.com/andrewtheguy/qrcodesecureshare',
        category: 'transfer',
    },
    {
        name: 'Secure Send',
        subdomain: 'securesend',
        description: 'Encrypted P2P text and file transfer with PIN security.',
        github: 'https://github.com/andrewtheguy/secure-send-web',
        category: 'transfer',
    },
    {
        name: 'Wormhole RS',
        description: 'Secure file transfer tool inspired by Magic Wormhole.',
        github: 'https://github.com/andrewtheguy/wormhole-rs',
        category: 'transfer',
    },
    {
        name: 'Tunnel RS',
        description: 'High-performance tunneling tool for exposing local servers.',
        github: 'https://github.com/andrewtheguy/tunnel-rs',
        category: 'transfer',
    },
    {
        name: 'Tunnel RS Manager',
        description: 'GUI Manager for tunnel-rs instances.',
        github: 'https://github.com/andrewtheguy/tunnel-rs-manager',
        category: 'transfer',
    },
    {
        name: 'Transmitwave',
        subdomain: 'transmitwave',
        description: 'Data-over-sound transmission using FSK modulation.',
        github: 'https://github.com/andrewtheguy/transmitwave',
        category: 'transfer',
    },

    // Audio
    {
        name: 'Audio Player',
        subdomain: 'audioplayer',
        description: 'Web-based HLS audio player with position memory.',
        github: 'https://github.com/andrewtheguy/audioplayer',
        category: 'audio',
    },
    {
        name: 'Whisper Transcribe Py',
        description: 'Python wrapper for OpenAI\'s Whisper model.',
        github: 'https://github.com/andrewtheguy/whisper_transcribe_py',
        category: 'audio',
    },
    {
        name: 'Audio Pattern Detector',
        description: 'Real-time detection of specific audio patterns.',
        github: 'https://github.com/andrewtheguy/audio_pattern_detector',
        category: 'audio',
    },
    {
        name: 'Save Audio Stream',
        description: 'Record and save live audio streams.',
        github: 'https://github.com/andrewtheguy/save_audio_stream',
        category: 'audio',
    },
    {
        name: 'Playsound RS',
        description: 'Simple CLI tool for playing audio.',
        github: 'https://github.com/andrewtheguy/playsoundrs',
        category: 'audio',
    },

    // Tools
    {
        name: 'NostrPad',
        subdomain: 'nostrpad',
        description: 'Shared notepad powered by Nostr relays.',
        github: 'https://github.com/andrewtheguy/nostrpad',
        category: 'tools',
    },
    {
        name: 'File Organizer',
        description: 'CLI tool to organize files based on rules.',
        github: 'https://github.com/andrewtheguy/file-organizer',
        category: 'tools',
    },
    {
        name: 'Dup File Finder RS',
        description: 'Fast duplicate file finder utility.',
        github: 'https://github.com/andrewtheguy/dup-file-finder-rs',
        category: 'tools',
    },
];
