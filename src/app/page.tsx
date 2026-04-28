"use client";

import { useState } from "react";
import { Flame, Search, Sparkles } from "lucide-react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [roast, setRoast] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setRoast(null);

    // Simulate a roast generation
    await new Promise((r) => setTimeout(r, 2000));
    setRoast(
      `Ah, @${username.replace("@", "")}... where do I even start? Your timeline reads like a ` +
      `fortune cookie factory had a meltdown — vaguely inspirational quotes mixed with hot takes ` +
      `nobody asked for. Your profile pic screams "I peaked in 2019" and your bio says ` +
      `"thought leader" but your engagement says "talking to yourself." ` +
      `You repost more than you post — at least commit to having your OWN bad opinions! 🔥`
    );
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--card)]/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[var(--roast)]/20">
              <Flame className="size-5 text-[var(--roast)]" />
            </div>
            <span className="font-bold text-lg">X Profile Roaster</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
            <Sparkles className="size-3.5" />
            <span>Powered by X API + xAI</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--roast)]/10 border border-[var(--roast)]/20 text-[var(--roast)] text-sm font-medium mb-4">
            <Flame className="size-4" />
            AI-Powered Comedy Roasts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Get Roasted by AI
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-lg mx-auto text-pretty">
            Enter any X username and watch our AI deliver a hilarious, witty roast based on their profile and posts.
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--muted)] pointer-events-none" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter X username (e.g., elonmusk)"
                className="w-full h-14 pl-12 pr-4 text-lg bg-[var(--card)]/50 border border-[var(--border)] rounded-md outline-none focus:border-[var(--roast)] placeholder:text-[var(--muted)]/70 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !username.trim()}
              className="w-full h-12 text-base font-semibold bg-white text-black rounded-md hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Flame className="size-5" />
              {loading ? "Generating Roast..." : "Generate Roast"}
            </button>
          </form>

          {/* Roast result */}
          {roast && (
            <div className="rounded-xl border border-[var(--roast)]/30 bg-[var(--roast)]/5 p-6 space-y-3 animate-in fade-in">
              <div className="flex items-center gap-2 text-[var(--roast)] font-semibold">
                <Flame className="size-5" />
                Roast for @{username.replace("@", "")}
              </div>
              <p className="text-[var(--foreground)] leading-relaxed">{roast}</p>
            </div>
          )}
        </div>

        <p className="mt-12 text-xs text-[var(--muted)]/60 text-center max-w-md">
          For entertainment purposes only. Roasts are AI-generated satire based on public profile data. Please use responsibly.
        </p>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>Built with X API and xAI Grok</p>
          <p className="text-xs">No data is stored. All roasts are generated in real-time.</p>
        </div>
      </footer>
    </main>
  );
}
