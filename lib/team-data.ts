export interface TeamMember {
  name: string;
  role: string;
  summary: string;
  bio: string;
  isFounder: boolean;
  photo: string | null;
}

const teamMembers: TeamMember[] = [
  {
    name: "Charlene Eiman Gallo",
    role: "Founder / Technical Director / Audio Technician",
    summary:
      "Founded Axel Multimedia Services to bring broadcast-level precision to events of every scale.",
    bio: "Eiman built Axel Multimedia Services around a single conviction: live events deserve to be experienced beyond the venue. He designs production systems focused on reliability, clarity, and broadcast-grade quality — ensuring every moment is captured and transmitted with the same emotion, energy, and weight as being physically present. His vision drives the standard behind every project the company takes on.",
    isFounder: true,
    photo: null,
  },
  {
    name: "Emmanuel John Francisco",
    role: "Technical Director / Lead Camera Switcher",
    summary:
      "Architects the broadcast's visual and digital infrastructure for multi-camera productions.",
    bio: "Emmanuel engineers each event from the ground up — camera planning, cable management, network bonding, and wireless transmission. At the control desk, he makes real-time switching decisions that shape the visual narrative, ensuring every broadcast is seamless, stable, and professionally executed across even the most demanding multi-camera setups.",
    isFounder: false,
    photo: "/team/Emmanuel John Francisco.png",
  },
  {
    name: "Clifford Deocampo",
    role: "Camera Operator / Camera Switcher",
    summary:
      "Blends creative storytelling with precise live-stream execution across multi-camera setups.",
    bio: "Clifford bridges the gap between filmmaking and live production. He manages multi-camera switching and real-time broadcast decisions while bringing a filmmaker's eye to composition and pacing — delivering high-quality output whether the footage is going out live or captured for post-production.",
    isFounder: false,
    photo: null,
  },
  {
    name: "Janjan Suarez",
    role: "Camera Operator",
    summary:
      "Specializes in precision camera movement using gimbal and tripod systems for cinematic visuals.",
    bio: "Janjan is a filmmaker grounded in the fundamentals — composition, timing, lighting, and deliberate camera control. Working with gimbal and tripod systems, he produces smooth, stable footage that feels both dynamic and intentional, turning raw event moments into clean, cinematic sequences.",
    isFounder: false,
    photo: "/team/Janjan Suarez.jpeg",
  },
  {
    name: "Kamski Mena",
    role: "Camera Operator",
    summary:
      "A detail-driven storyteller who captures moments with purpose, precision, and cinematic impact.",
    bio: "Kamski approaches every shoot with an eye for the details that make a moment worth preserving. He blends technical skill with creative instinct, framing each shot with intention and delivering footage that carries weight — whether it's a wide establishing shot or a tight, emotional close-up.",
    isFounder: false,
    photo: null,
  },
  {
    name: "Ruben Java",
    role: "Camera Operator",
    summary:
      "Brings precision and intention to every frame, using gimbals for seamless camera movement.",
    bio: "Ruben operates with a steady hand and a clear sense of purpose behind the lens. His gimbal work produces fluid, controlled movement that enhances the visual story without drawing attention to the technique — letting the event itself stay front and center.",
    isFounder: false,
    photo: null,
  },
  {
    name: "Kristine Espinosa",
    role: "Photographer / Camera Operator",
    summary:
      "A patient observer with a deep understanding of light, composition, and timing.",
    bio: "Tintin moves through events with quiet awareness, always ready to recognize meaning in the most fleeting moments. Through a deep understanding of light, composition, and timing, she shapes reality into images that go beyond what is seen on the surface — capturing the emotion and atmosphere that make each event unique.",
    isFounder: false,
    photo: null,
  },
  {
    name: "Denrey Dumaguin",
    role: "Drone Pilot",
    summary:
      "Captures dynamic aerial perspectives grounded in safety, control, and environmental awareness.",
    bio: "Denrey brings a unique vantage point to every project. His aerial work adds depth, scale, and a fresh perspective — from sweeping venue panoramas to dynamic tracking shots. Every flight is grounded in safety protocols, precise control, and a strong sense of composition that turns overhead footage into cinematic content.",
    isFounder: false,
    photo: null,
  },
  {
    name: "Maetrix Gonzales",
    role: "Film Editor",
    summary:
      "Crafts raw event moments into cohesive, cinematic narratives with intentional pacing and flow.",
    bio: "Maetrix takes the raw material from a production and shapes it into a story. Her editing is guided by pacing, continuity, sound design, and visual flow — transforming hours of footage into polished, emotionally resonant narratives that feel intentional from the first frame to the last.",
    isFounder: false,
    photo: null,
  },
];

export function getFounder(): TeamMember {
  return teamMembers.find((m) => m.isFounder)!;
}

export function getCrew(): TeamMember[] {
  return teamMembers.filter((m) => !m.isFounder);
}

export function getInitials(name: string): string {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
