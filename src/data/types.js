// Fix binaries later - dir to prog done - start w abstract

export const mbti = [
	{
		type: 'ESTJ',
		stack: {
			hero: 'Te',
			parent: 'Si',
			child: 'Ne',
			inferior: 'Fi', 
			nemesis: 'Ti',
			critic: 'Se',
			trickster: 'Ni',
			demon: 'Fe',
		},
		binaries: {
			direct: true,
			initiating: true,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ESTP',
		stack: {
			hero: 'Se',
			parent: 'Ti',
			child: 'Fe',
			inferior: 'Ni', 
			nemesis: 'Si',
			critic: 'Te',
			trickster: 'Fi',
			demon: 'Ne',
		},
		binaries: {
			direct: true,
			initiating: true,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ENTJ',
		stack: {
			hero: 'Te',
			parent: 'Ni',
			child: 'Se',
			inferior: 'Fi', 
			nemesis: 'Ti',
			critic: 'Ne',
			trickster: 'Si',
			demon: 'Fe',
		},
		binaries: {
			direct: true,
			initiating: true,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ENFJ',
		stack: {
			hero: 'Fe',
			parent: 'Ni',
			child: 'Se',
			inferior: 'Ti', 
			nemesis: 'Fi',
			critic: 'Ne',
			trickster: 'Si',
			demon: 'Te',
		},
		binaries: {
			direct: true,
			initiating: true,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ESFJ',
		stack: {
			hero: 'Fe',
			parent: 'Si',
			child: 'Ne',
			inferior: 'Ti', 
			nemesis: 'Fi',
			critic: 'Se',
			trickster: 'Ni',
			demon: 'Te',
		},
		binaries: {
			direct: false,
			initiating: true,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ESFP',
		stack: {
			hero: 'Se',
			parent: 'Fi',
			child: 'Te',
			inferior: 'Ni', 
			nemesis: 'Si',
			critic: 'Fe',
			trickster: 'Ti',
			demon: 'Ne',
		},
		binaries: {
			direct: false,
			initiating: true,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ENTP',
		stack: {
			hero: 'Ne',
			parent: 'Ti',
			child: 'Fe',
			inferior: 'Si', 
			nemesis: 'Ni',
			critic: 'Te',
			trickster: 'Fi',
			demon: 'Se',
		},
		binaries: {
			direct: false,
			initiating: true,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ENFP',
		stack: {
			hero: 'Ne',
			parent: 'Fi',
			child: 'Te',
			inferior: 'Si', 
			nemesis: 'Ni',
			critic: 'Fe',
			trickster: 'Ti',
			demon: 'Se',
		},
		binaries: {
			direct: false,
			initiating: true,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ISTJ',
		stack: {
			hero: 'Si',
			parent: 'Te',
			child: 'Fi',
			inferior: 'Ne', 
			nemesis: 'Se',
			critic: 'Ti',
			trickster: 'Fe',
			demon: 'Ni',
		},
		binaries: {
			direct: true,
			initiating: false,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ISTP',
		stack: {
			hero: 'Ti',
			parent: 'Se',
			child: 'Ni',
			inferior: 'Fe', 
			nemesis: 'Te',
			critic: 'Si',
			trickster: 'Ne',
			demon: 'Fi',
		},
		binaries: {
			direct: true,
			initiating: false,
			progression: true,
			abstract: false,
			affiliative: false, 
			systematic: false,
			spearbow: false,
			firewind: true,
			quadra: 'Templar'
		}
	},
	{
		type: 'INTJ',
		stack: {
			hero: 'Ni',
			parent: 'Te',
			child: 'Fi',
			inferior: 'Se', 
			nemesis: 'Ne',
			critic: 'Ti',
			trickster: 'Fe',
			demon: 'Si',
		},
		binaries: {
			direct: true,
			initiating: false,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'INFJ',
		stack: {
			hero: 'Ni',
			parent: 'Fe',
			child: 'Ti',
			inferior: 'Se', 
			nemesis: 'Ne',
			critic: 'Fi',
			trickster: 'Te',
			demon: 'Si',
		},
		binaries: {
			direct: true,
			initiating: false,
			progression: true,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ISFJ',
		stack: {
			hero: 'Si',
			parent: 'Fe',
			child: 'Ti',
			inferior: 'Ne', 
			nemesis: 'Se',
			critic: 'Fi',
			trickster: 'Te',
			demon: 'Ni',
		},
		binaries: {
			direct: false,
			initiating: false,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'ISFP',
		stack: {
			hero: 'Fi',
			parent: 'Se',
			child: 'Ni',
			inferior: 'Te', 
			nemesis: 'Fe',
			critic: 'Si',
			trickster: 'Ne',
			demon: 'Ti',
		},
		binaries: {
			direct: false,
			initiating: false,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'INTP',
		stack: {
			hero: 'Ti',
			parent: 'Ne',
			child: 'Si',
			inferior: 'Fe', 
			nemesis: 'Te',
			critic: 'Ni',
			trickster: 'Se',
			demon: 'Fi',
		},
		binaries: {
			direct: false,
			initiating: false,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	{
		type: 'INFP',
		stack: {
			hero: 'Fi',
			parent: 'Ne',
			child: 'Si',
			inferior: 'Te', 
			nemesis: 'Fe',
			critic: 'Ni',
			trickster: 'Se',
			demon: 'Ti',
		},
		binaries: {
			direct: false,
			initiating: false,
			progression: false,
			abstract: false,
			affiliative: true, 
			systematic: true,
			spearbow: true,
			firewind: false,
			quadra: 'Philosopher'
		}
	},
	
]