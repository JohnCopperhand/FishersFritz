import random
import itertools

p1 = []
p2 = []

Kugel = 'Kug'
Saege = 'Sae'
Forelle = 'For'
Krake = 'Kra'
joker = 'Seestern'

rot = 'rot'
gruen = 'gru'
blau = 'bla'
gelb = 'gel'
weiss = 'joker'

Schuh = 'Sch'

Kugel_rot = [rot, Kugel]
Kugel_gruen = [gruen, Kugel]
Kugel_blau = [blau, Kugel]
Kugel_gelb = [gelb, Kugel]

Saege_rot = [rot, Saege]
Saege_gruen = [gruen, Saege]
Saege_blau = [blau, Saege]
Saege_gelb = [gelb, Saege]

Forelle_rot = [rot, Forelle]
Forelle_gruen = [gruen, Forelle]
Forelle_blau = [blau, Forelle]
Forelle_gelb = [gelb, Forelle]

Krake_rot = [rot, Krake]
Krake_gruen = [gruen, Krake]
Krake_blau = [blau, Krake]
Krake_gelb = [gelb, Krake]

board = [[Kugel_blau, Kugel_gelb, Kugel_gruen, Kugel_rot, Schuh],
         [Saege_blau, Saege_gelb, Saege_gruen, Saege_rot, Schuh],
         [Forelle_blau, Forelle_gelb, Forelle_gruen, Forelle_rot, Schuh],
         [Krake_blau, Krake_gelb, Krake_gruen, Krake_rot, Schuh],
         [Schuh, Schuh, Schuh, Schuh, Schuh]
         ]

#function of printing//showing the board
def print_board(board):
    for row in range(0, 5):
        print(board[row])

#shuffle the cards
def shuffle2d(board, rand=random):
    reshape = []
    data = []
    iend = 0
    for row in board:
        data.extend(row)
        istart, iend = iend, iend + len(row)
        reshape.append((istart, iend))
    rand.shuffle(data)
    return [data[istart:iend] for (istart, iend) in reshape]

#function for the dice
def wuerfel():
    farb_wuerfel = [rot, gruen, blau, gelb, weiss, weiss]
    fisch_wuerfel = [Kugel, Saege, Forelle, Krake, joker, joker]
    farb_wurf = (random.choice(farb_wuerfel))
    fisch_wurf = (random.choice(fisch_wuerfel))
    wurf = [farb_wurf, fisch_wurf]
    return fisch_wurf, farb_wurf, wurf




board = shuffle2d(board)


#choose which player should start
rand_num = random.choice([1, 2])
if rand_num == 1:
    active_player = 'Spieler 1'
    beginner = 'player 1'
elif rand_num == 2:
    active_player = 'Spieler 2'
    beginner = 'player 2'
else:
    print('error with active_player')




#print the starting board
print(p1)
print_board(board)
print(p2)

print('%s darf beginnen ;) die Würdel haben entschieden' % beginner)
print('%s is würfeling' % beginner)



combined = list(itertools.chain.from_iterable(board))
while (len(combined)) - (combined.count(0)) > 0:
    #rolling the dice
    input('drück Enter, um zu würfeln')
    fisch_wurf, farb_wurf, wurf = wuerfel()
    print('Du hast den/die %s %s gewürfelt' % (farb_wurf, fisch_wurf))
    #guess of the first player
    playertry_col = int(input('In welcher Spalte ist der Fisch?:'))
    playertry_row = int(input('In welcher Reihe ist der Fisch?:'))
    card_found = board[playertry_row - 1][playertry_col - 1]
    print('Du hast %s aufgedeckt' % card_found)
    #if card found is equal to card rolled with dice, append it to players deck
    if card_found == wurf:
        board[playertry_row - 1][playertry_col - 1] = 0
        active_player.append(card_found)
        print('Fisch gefunden! ;)(')
    # change turn of player + implemnent finding of the bad card (schuh)
    elif card_found == Schuh:
        board[playertry_row - 1][playertry_col - 1] = 0
        active_player.append(card_found)
        print('super, du hast einen Schuh gefunden ;(')
        if active_player == 'Spieler 1':
            active_player = 'Spieler 2'
            print(active_player)
        elif active_player == 'Spieler 2':
            print(active_player)
            active_player = 'Spieler 1'
        else:
            print('problem mit active_player')
        #if a player chooses a field, where there is no card anymore
    elif card_found == 0:
        print('leeres Feld, hier gibts nichts mehr')

        #case, where player rolled the blank dice, where he can pick any color.
    elif wurf[0] == weiss and wurf[1] == card_found[1]:
        board[playertry_row - 1][playertry_col - 1] = 0
        active_player.append(card_found)
        print('irgendne Farbe Junge! %s darf noch einmal würfeln' % active_player)

        #case where 1 dice is blank so he can choose any form.
    elif wurf[1] == joker and wurf[0] == card_found[0]:
        board[playertry_row - 1][playertry_col - 1] = 0
        active_player.append(card_found)
        print('irgendnen Fisch Junge!!')
        # case where player can pick any card on the board
    elif wurf[0] == weiss and wurf[1] == joker:
        board[playertry_row - 1][playertry_col - 1] = 0
        active_player.append(card_found)
        print('irgendwas Junge')
        #changing turns
    else:
        if active_player == 'Spieler 1':
            active_player = 'Spieler 2'
        elif active_player == 'Spieler 2':
            active_player = 'Spieler 1'
        else:
            print('problem mit active_player')
        print('Niete ;( %s ist an der Reihe' % active_player)


    print(p1)
    print('____________________________________________________________')
    print_board(board)
    print('____________________________________________________________')
    print(p2)

    combined = list(itertools.chain.from_iterable(board))



'''RESTLICHE PROBLEME:
1.. give a message if it gets a wrong input and repeat.
2.take cards from other player
4. calculate points, and end game
5. make the game with graphics/real game, not console game
'''
