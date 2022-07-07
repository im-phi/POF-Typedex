// Fix binaries later - dir to prog done - start w abstract

export const mbti = [
	{
		type: 'ESTJ',
		stack: {
			hero: 'Te',
			parent: 'Si',
			child: 'Ne',
			inferior: 'Fi', 
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