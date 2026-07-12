create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  guests integer not null check (guests between 1 and 3),
  language text not null default 'kk',
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

drop policy if exists "Allow public RSVP inserts" on public.rsvps;
create policy "Allow public RSVP inserts"
on public.rsvps
for insert
to anon
with check (true);
